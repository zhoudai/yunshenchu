// 联系我们 弹窗组件
import React, { useState, useEffect } from 'react';
import { MessageCircleMore } from 'lucide-react';
interface ConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultModal: React.FC<ConsultModalProps> = ({ isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // 立即显示组件
      setShouldRender(true);
      // 微小延迟后开始动画，让组件先以初始状态渲染
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      // 立即开始关闭动画
      setIsAnimating(false);
      // 延迟隐藏，让滑出动画完成
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <>
      {/* 蒙层 */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-500 h-screen w-screen ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* 右侧滑动图片容器 */}
      <div className={`fixed right-0 top-[10vw] h-[30vw] w-[22vw] shadow-2xl z-50 transform transition-transform duration-500 rounded-2xl ease-in-out ${isAnimating ? 'translate-x-0' : 'translate-x-full'
        }`}>
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full z-10"
        >
          <MessageCircleMore className="w-8 h-8" />
        </button>
        {/* 图片内容 */}
        <div className="h-full flex flex-col rounded-2xl ">
          <img src="https://img.fengxuan.cn/yunshenchu/032.png"
            alt="咨询图片"
            className="w-full h-full object-contain rounded-2xl" />
        </div>
      </div>
    </>
  );
};

export default ConsultModal;