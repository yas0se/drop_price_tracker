import { getServerSession } from "next-auth";
import { auth } from '@/lib/auth';

export default async function HeaderServer() {
  const session = await getServerSession(auth);
  console.log('session: ', session); 

  return (
    <div>
      {session?.user ? (
        <a
          type="button"
          className="bg-transparent border-2 border-gray-300 hover:border-black rounded px-4 py-2.5 mt-4 text-sm text-black font-semibold"
          href="/api/auth/signout/github"
        >
          LOGOUT
        </a>
      ) : (
        <a
          type="button"
          className="bg-transparent border-2 border-gray-300 hover:border-black rounded px-4 py-2.5 mt-4 text-sm text-black font-semibold"
          href="/api/auth/signin/github"
        >
          LOGIN with GitHub
        </a>
      )}
    </div>
  );
}
