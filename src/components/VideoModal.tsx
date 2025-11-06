import { X } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl, title }: VideoModalProps) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-lg animate-fade-in">
      <div className="relative w-full max-w-6xl">
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-12 right-0 text-foreground hover:text-primary"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
        
        {title && (
          <h3 className="text-2xl font-bold mb-4 text-center text-foreground">
            {t(title)}
          </h3>
        )}
        
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-glow-strong">
          <video
            className="w-full h-full"
            controls
            autoPlay
            src={videoUrl}
          >
            {t('您的浏览器不支持视频播放')}
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
