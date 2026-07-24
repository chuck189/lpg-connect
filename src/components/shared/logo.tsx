import Link from "next/link";

export default function Logo() {
  return (
    <Link 
      href="/"
      className="flex items-center gap-2 font-bold text-xl"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
        LPG
      </div>

      <div>
        <span className="text-green-700">
          Connect
        </span>
        <span className="text-yellow-500">
          Zambia
        </span>
      </div>

    </Link>
  );
}