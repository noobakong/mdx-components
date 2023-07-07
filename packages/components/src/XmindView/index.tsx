import React, { useEffect, useRef } from "react";
import { XMindEmbedViewer } from "xmind-embed-viewer";

export interface IProps {
  width?: string | number;
  height?: string | number;
  url: string;
}

export const XmindView = ({ width, height, url }: IProps) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const viewer = new XMindEmbedViewer({
      el: containerRef.current,
    });

    fetch(url)
      .then((res) => res.arrayBuffer())
      .then((file) => {
        viewer.load(file);
        viewer.setFitMap();
        width && viewer.setStyles({ width: `${width}` });
        height && viewer.setStyles({ height: `${height}` });
      });
  }, [height, url, width]);

  return (
    <div ref={containerRef} style={{ width, height}} />
  );
};
