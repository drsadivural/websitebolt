import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface PageHeaderProps {
  title: string;
  description: string;
  image: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, image }) => {
  const { theme } = useTheme();

  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[500px]">
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${image})`
        }}
      >
        <span className="w-full h-full absolute opacity-75 bg-gray-900"></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-5xl mb-4">
                {title}
              </h1>
              <p className="mt-4 text-lg text-gray-200">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;