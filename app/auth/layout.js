// app/auth/layout.js
export default function AuthLayout({ children,  title }) {
  return (
    <div className="bg-gray-600 flex flex-col h-screen justify-center items-center">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="w-full border-stroke dark:border-strokedark">
            <div className="w-full p-4 ">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
