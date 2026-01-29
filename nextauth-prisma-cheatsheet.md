# NextAuth + Prisma Cheat Sheet (Magic Link Only)

## Tables and Purpose

| Table                 | Represents            | Notes                                                                                           |
| --------------------- | --------------------- | ----------------------------------------------------------------------------------------------- |
| **User**              | Who the person is     | Created on first login via magic link. Stores profile info (email, name, image, emailVerified). |
| **Account**           | How the user logs in  | Empty for email-only magic link. Populated for OAuth / external providers.                      |
| **Session**           | Active logins         | Created per login. Stores session token and expiration.                                         |
| **VerificationToken** | Temporary magic links | One-time token sent via email. Deleted after login.                                             |

## Relationships

```
User
 ├─ Account (OAuth/external) [none for email magic link]
 └─ Session (active logins)
```

## Email Magic Link Flow

1. User submits email
2. NextAuth creates **VerificationToken** row
3. Sends magic link (or logs it in console)
4. User clicks link → token is deleted
5. If new email → **User** row created
6. **Session** row created for login
7. Account table remains empty (unless OAuth added)

## Frontend / Session Usage

### Client-side

```ts
import { useSession, signOut } from "next-auth/react";

const { data: session, status } = useSession();

if (status === "loading") return <p>Loading...</p>;
if (!session) return <p>Not logged in</p>;

// Access user ID to associate any data with this user
const userId = session.user?.id;
```

### Server-side (API routes)

```ts
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

const session = await getServerSession(authOptions);
if (!session) return new Response("Unauthorized", { status: 401 });

// Use session.user.id to store database records
```

## Saving User-specific Data (e.g., Design Sessions)

* Use `session.user.id` to link records to the logged-in user
* Client can temporarily store in `localStorage` for unsaved work
* Sync localStorage → DB after login

```ts
const localSessions = JSON.parse(localStorage.getItem("designSessions") || "[]");
if (session?.user?.id && localSessions.length) {
  localSessions.forEach(async (s) => {
    await fetch("/api/design-sessions", {
      method: "POST",
      body: JSON.stringify({ content: s }),
    });
  });
  localStorage.removeItem("designSessions");
}
```

## Email Provider Setup (SMTP)

1. Install provider dependency: `npm install nodemailer`
2. Add environment variables:

```env
EMAIL_SERVER=smtp://user:pass@smtp.provider.com:587
EMAIL_FROM=YourApp <no-reply@yourapp.com>
```

3. Configure EmailProvider in NextAuth:

```ts
EmailProvider({
  server: process.env.EMAIL_SERVER,
  from: process.env.EMAIL_FROM,
})
```

* Magic links will now be actually emailed instead of logged to console.

## Tips / Notes

* SQLite dev DB (`dev.db`) is local; Prisma engine runs automatically on dev server.
* `.env.local` can store `DATABASE_URL` and secrets. Use `--dotenv .env.local` for Prisma CLI if needed.
* No new migration needed when changing `.env` location.
* Account table only matters for OAuth providers.
