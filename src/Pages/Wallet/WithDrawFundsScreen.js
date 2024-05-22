import React from "react";
import { useNavigate } from "react-router-dom";

const WithDrawFundsScreen = () => {
  const navigate = useNavigate();

  const handleWallet = () => {
    navigate("/Wallet");
  };
  return (
    <div className="flex justify-center min-h-screen py-2">
      <div className="flex flex-col bg-white md:min-w-[800px] min-w-[360px] min-h-screen">
        <div className="flex flex-col px-7 w-full">
          <button onClick={handleWallet}>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13 1.625C9.98316 1.625 7.08989 2.82343 4.95666 4.95666C2.82343 7.08989 1.625 9.98316 1.625 13C1.625 16.0168 2.82343 18.9101 4.95666 21.0433C7.08989 23.1766 9.98316 24.375 13 24.375C16.0168 24.375 18.9101 23.1766 21.0433 21.0433C23.1766 18.9101 24.375 16.0168 24.375 13C24.375 9.98316 23.1766 7.08989 21.0433 4.95666C18.9101 2.82343 16.0168 1.625 13 1.625ZM13 26C9.55219 26 6.24558 24.6304 3.80761 22.1924C1.36964 19.7544 0 16.4478 0 13C0 9.55219 1.36964 6.24558 3.80761 3.80761C6.24558 1.36964 9.55219 0 13 0C16.4478 0 19.7544 1.36964 22.1924 3.80761C24.6304 6.24558 26 9.55219 26 13C26 16.4478 24.6304 19.7544 22.1924 22.1924C19.7544 24.6304 16.4478 26 13 26ZM18.6875 13.8125C18.903 13.8125 19.1097 13.7269 19.262 13.5745C19.4144 13.4222 19.5 13.2155 19.5 13C19.5 12.7845 19.4144 12.5778 19.262 12.4255C19.1097 12.2731 18.903 12.1875 18.6875 12.1875H9.27387L12.7628 8.70025C12.9153 8.54768 13.001 8.34076 13.001 8.125C13.001 7.90924 12.9153 7.70232 12.7628 7.54975C12.6102 7.39718 12.4033 7.31147 12.1875 7.31147C11.9717 7.31147 11.7648 7.39718 11.6122 7.54975L6.73725 12.4247C6.66158 12.5002 6.60155 12.5899 6.56059 12.6886C6.51963 12.7873 6.49855 12.8931 6.49855 13C6.49855 13.1069 6.51963 13.2127 6.56059 13.3114C6.60155 13.4101 6.66158 13.4998 6.73725 13.5753L11.6122 18.4503C11.7648 18.6028 11.9717 18.6885 12.1875 18.6885C12.4033 18.6885 12.6102 18.6028 12.7628 18.4503C12.9153 18.2977 13.001 18.0908 13.001 17.875C13.001 17.6592 12.9153 17.4523 12.7628 17.2997L9.27387 13.8125H18.6875Z"
                fill="#211F1F"
              />
            </svg>
          </button>
          <div className="flex gap-2 items-start">
            <div className="flex flex-col grow shrink-0 mt-1 basis-0 w-fit">
              <div className="flex justify-center items-center self-center px-2.5 mt-11 bg-indigo-500 h-[93px] rounded-[81px] w-[93px]">
                <svg
                  width="94"
                  height="92"
                  viewBox="0 0 94 92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="94" height="92" rx="46" fill="#6C63FF" />
                  <path
                    d="M50.5917 31.8399C51.2279 31.2117 52.0744 30.8644 52.9528 30.8713C53.8311 30.8782 54.6725 31.2387 55.2994 31.8768C55.9264 32.5149 56.2898 33.3807 56.313 34.2915C56.3362 35.2022 56.0174 36.0867 55.4239 36.7583L37.4048 60.1323C37.095 60.4784 36.721 60.7562 36.3053 60.9491C35.8896 61.1419 35.4407 61.2458 34.9854 61.2545C34.53 61.2633 34.0777 61.1767 33.6554 61C33.2331 60.8232 32.8495 60.56 32.5275 60.226L20.578 47.8317C20.2452 47.51 19.9783 47.1222 19.7932 46.6912C19.6081 46.2603 19.5086 45.7951 19.5005 45.3234C19.4925 44.8517 19.5762 44.3831 19.7465 43.9457C19.9169 43.5082 20.1704 43.1108 20.492 42.7772C20.8137 42.4436 21.1968 42.1807 21.6185 42.004C22.0403 41.8273 22.492 41.7405 22.9468 41.7488C23.4016 41.7571 23.8501 41.8604 24.2655 42.0524C24.681 42.2444 25.055 42.5213 25.365 42.8664L34.8216 52.6704L50.5014 31.9429L50.5917 31.8399ZM46.4369 55.9165L50.5917 60.226C50.9136 60.5593 51.2969 60.8219 51.7188 60.9982C52.1407 61.1745 52.5925 61.2608 53.0473 61.2521C53.502 61.2433 53.9504 61.1397 54.3657 60.9473C54.781 60.7549 55.1547 60.4777 55.4645 60.1323L73.4926 36.7583C73.8164 36.4266 74.0725 36.0307 74.2456 35.5941C74.4186 35.1576 74.5051 34.6893 74.4998 34.2173C74.4945 33.7453 74.3975 33.2792 74.2147 32.847C74.0319 32.4147 73.7669 32.0251 73.4357 31.7014C73.1045 31.3777 72.7138 31.1265 72.2869 30.9629C71.86 30.7993 71.4057 30.7266 70.9512 30.7491C70.4966 30.7717 70.0511 30.889 69.6412 31.0941C69.2313 31.2992 68.8655 31.5879 68.5656 31.9429L52.8813 52.6704L50.691 50.3939L46.4369 55.9165Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex gap-0 self-center mt-4 text-xl font-medium whitespace-nowrap text-neutral-800">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6.885H15.1335C17.8785 6.885 19.9035 8.17875 20.3647 10.764H9V13.1287H20.3647C19.9237 15.7522 18 17.0055 15.273 17.0055H9V19.9688L18.9833 31.5H23.7308L13.7137 19.989H15.6375C20.8485 19.9485 23.4337 16.668 23.9355 13.1287H27V10.764H23.9737C23.7937 9.0135 23.1705 7.76025 22.1895 6.867H27V4.5H9V6.885Z"
                fill="black"
              />
            </svg>

            <h4 className="my-auto">2000</h4>
          </div>
          <p className="mt-5 text-sm font-medium text-center text-neutral-800">
            Your payout request has been submitted <br />
            successfully.
          </p>
          <h4 className="mt-8 text-sm font-medium text-neutral-800">
            Request Id
          </h4>
          <p className="mt-2 text-sm text-neutral-800">12547896</p>
          <h4 className="mt-6 text-sm font-medium text-neutral-800">Date</h4>
          <p className="mt-3 text-sm text-neutral-800">March 15, 2024</p>
          <h4 className="mt-5 text-sm font-medium text-neutral-800">
            Payout Method
          </h4>
          <p className="mt-2 text-sm text-neutral-800">Bank Transfer</p>
          <h4 className="mt-6 text-sm font-medium text-neutral-800">Status</h4>
          <p className="mt-3 text-sm text-neutral-800">Pending</p>
        </div>
      </div>
    </div>
  );
};

export default WithDrawFundsScreen;
