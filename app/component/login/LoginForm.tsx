import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/app/hooks/useUserContext";
import AuthContext from "../../context/AuthContext";
import Image from "next/image";

export default function LoginForm({
  handleToastWarning,
}: {
  handleToastWarning: any;
}) {
  const { isDarkMode } = useUserContext();
  const { user, login } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard/upload");
    }
  }, [user, router]);

  return (
    <div className="flex items-center justify-center w-full md:w-[500px] md:bg-transparent p-4 md:p-0">
      <div className="w-full max-w-md space-y-6 rounded-lg">
        <div
          className={`space-y-1 text-center md:text-left text-sm font-semibold ${
            isDarkMode ? "text-light-lighter" : "text-dark-darker "
          }`}
        >
          <h2 className="font-nunito text-2xl md:text-3xl font-bold">
            Sign In
          </h2>
          <p>Sign in to your account</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-5 text-sm">
          <button
            className={`w-full flex items-center justify-center py-2 font-semibold text-slate-500 rounded-lg shadow-md hover:shadow-lg transition duration-300 ${
              isDarkMode ? "bg-dark-darker " : "bg-light-lighter"
            }`}
            onClick={login}
          >
            <Image src="/google-icon.png" alt="Google" width={20} height={20} className="mr-2" />
            Sign in with Google
          </button>
          <button
            className={`w-full flex items-center justify-center py-2 font-semibold text-slate-500 rounded-lg shadow-md hover:shadow-lg transition duration-300 ${
              isDarkMode ? "bg-dark-darker " : "bg-light-lighter"
            }`}
            onClick={handleToastWarning}
          >
            <Image src="/apple-icon.png" alt="Apple" width={16} height={16} className="mr-2" />
            Sign in with Apple
          </button>
        </div>

        <form
          className={`space-y-4 p-6 rounded-xl shadow-md transition duration-300 ${
            isDarkMode ? "bg-dark-darker " : "bg-light-lighter"
          }`}
          onClick={handleToastWarning}
        >
          <div>
            <label
              htmlFor="email"
              className={`block font-semibold ${
                isDarkMode ? "text-light-lighter " : "text-gray-700  "
              }`}
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg bg-[#EAEAEA] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className={`block font-semibold ${
                isDarkMode ? "text-light-lighter " : "text-gray-700  "
              }`}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg bg-[#EAEAEA] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>

          <div className="flex justify-between text-sm">
            <a href="#" className="text-primary hover:underline font-semibold">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-primary rounded-lg hover:bg-indigo-700 transition duration-300"
            onClick={handleToastWarning}
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center text-gray-600" onClick={login}>
          Don’t have an account?{" "}
          <a href="#" className="text-primary hover:underline">
            Register here
          </a>
        </p>

        <div className="flex items-center justify-center mt-4">
          <a href="#">
            <Image src="/media_logo.png" alt="GitHub" width={160} height={160} />
          </a>
        </div>
      </div>
    </div>
  );
}
