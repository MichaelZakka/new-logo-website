import Image from 'next/image';
import logo from '../assets/logo.png';

interface LoadingProps {
  isLoading: boolean;
}

export default function Loading({ isLoading }: LoadingProps) {
  return (
    <div className={`loader ${!isLoading ? 'hidden' : ''}`}>
      <div className="loader-content">
        <div className="loader-logo-container">
          <Image
            src={logo}
            alt="New Logo"
            width={200}
            height={80}
            priority
            className="loader-logo-img"
          />
        </div>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  );
}

