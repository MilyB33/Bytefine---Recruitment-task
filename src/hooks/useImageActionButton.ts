import { useRef } from "react";

import { useState } from "react";

type UseImageActionButtonProps = {
  onLoad: (src: string) => void;
};

export const useImageActionButton = ({ onLoad }: UseImageActionButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);

    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onLoad(reader.result as string);
        setIsLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return { isLoading, fileInputRef, onButtonClick, handleImageUpload };
};
