import { useEffect } from 'react';
import { useRouter } from 'next/router';
import supabase from "../db/connection";

export default function Logout() {
      const router = useRouter();

      useEffect(() => {
        async function signout() {
          const { error } = await supabase.auth.signOut()
          router.reload(window.location.pathname);
        }

        signout();
      }, [])

      return (
        <div>
            <h2 className="text-center text-2xl">logging out...</h2>
        </div>
      )
}

export async function getServerSideProps() {
  return {
    props: {}
  }
}