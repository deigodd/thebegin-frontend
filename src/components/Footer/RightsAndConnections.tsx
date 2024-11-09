import React from "react";

const RightsAndConnections: React.FC = () => {

    return (

        <div className="px-4 py-6 bg-[#7D4B31]  md:flex md:items-center md:justify-between">
        <span className="text-sm text-white/80 dark:text-gray-300 sm:text-center">© 2024 <a href="#" className="hover:text-[#FFFFFF]">The Begin™</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
          <a href="#" className="text-white/80 hover:text-[#FFFFFF] dark:hover:text-white transition-colors duration-300">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
              <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="#" className="text-white/80 hover:text-[#FFFFFF] dark:hover:text-white transition-colors duration-300">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
              <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
            </svg>
            <span className="sr-only">Twitter page</span>
          </a>
          <a href="#" className="text-white/80 hover:text-[#FFFFFF] dark:hover:text-white transition-colors duration-300">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
            </svg>
            <span className="sr-only">GitHub account</span>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#FFFFFF] dark:hover:text-white transition-colors duration-300">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.247 0 3.64.012 4.92.071 1.28.059 2.342.33 3.206 1.194.865.865 1.135 1.927 1.194 3.206.059 1.28.071 1.673.071 4.92s-.012 3.64-.071 4.92c-.059 1.28-.33 2.342-1.194 3.206-.865.865-1.927 1.135-3.206 1.194-1.28.059-1.673.071-4.92.071s-3.64-.012-4.92-.071c-1.28-.059-2.342-.33-3.206-1.194-.865-.865-1.135-1.927-1.194-3.206-.059-1.28-.071-1.673-.071-4.92s.012-3.64.071-4.92c.059-1.28.33-2.342 1.194-3.206.865-.865 1.927-1.135 3.206-1.194 1.28-.059 1.673-.071 4.92-.071zM12 0C8.741 0 8.335.012 7.061.071 5.704.142 4.459.537 3.423 1.573 2.386 2.61 1.991 3.856 1.93 5.213 1.871 6.487 1.859 6.893 1.859 12s.012 5.513.071 6.787c.059 1.357.456 2.602 1.493 3.639 1.035 1.036 2.28 1.431 3.639 1.493 1.274.059 1.678.071 4.788.071s3.514-.012 4.788-.071c1.357-.059 2.602-.456 3.639-1.493 1.036-1.037 1.434-2.282 1.493-3.639.059-1.274.071-1.7.071-6.787s-.012-5.513-.071-6.787c-.059-1.357-.456-2.602-1.493-3.639-1.035-1.036-2.28-1.431-3.639-1.493C15.335.012 14.93 0 12 0zM12 5.838a6.162 6.162 0 1 0 6.162 6.162A6.168 6.168 0 0 0 12 5.838zM12 10.597a2.438 2.438 0 1 1 0-4.876 2.438 2.438 0 0 1 0 4.876zM18.438 5.74a.727.727 0 1 0 .001-1.454.727.727 0 0 0-.001 1.454z" />
            </svg>
            <span className="sr-only">Instagram page</span>
          </a>
        </div>
      </div> 

    );
};

export default RightsAndConnections;