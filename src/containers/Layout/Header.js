import { useAuth, useAuthActions } from '@/context/AuthContext';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
// import { signout } from "src/redux/user/userActions";

const Header = () => {
  const { loading, user } = useAuth();
  const dispatch = useAuthActions();
  return (
    <header className={`bg-white shadow-md py-2 mb-8 sticky top-0 z-40`}>
      <div
        className={`container mx-auto xl:max-w-screen-xl px-4 md:px-0 transition-all ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <nav className="flex justify-between">
          <ul className="flex items-center gap-x-5">
            <li>
              <Link href="/">
                <div className="py-2 block">Home</div>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <div className="py-2 block">Blogs</div>
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-x-4">
            {user ? (
              <>
                <button
                  className="bg-red-600 px-2 py-1 rounded text-red-100"
                  onClick={() => dispatch({ type: 'SIGNOUT' })}
                >
                  خروج
                </button>
                <Link href="/profile">
                  <div className="py-2 block">
                    Profile - <span className="text-sm">{user.name}</span>
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Link href="/signup">
                  <div className="block">ثبت نام</div>
                </Link>
                <Link href="/signin">
                  <div className="block">ورود</div>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
