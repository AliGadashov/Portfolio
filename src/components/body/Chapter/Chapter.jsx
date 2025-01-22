import React from "react";
import { PiArrowElbowRightDown } from "react-icons/pi";

const Chapter = ({ currentPageId, pageMap, handleClick }) => {
    const currentPageData = pageMap.find((page) => page.id === currentPageId);

    if (!currentPageData) {
        return null;
    }

    const currentIndex = pageMap.findIndex((page) => page.id === currentPageId);
    const nextPage = currentIndex < pageMap.length - 1 ? pageMap[currentIndex + 1] : null;

    return (
        <div className="w-1/4 flex items-center gap-4 p-2.5 mb-10 mt-6">
      <span className="text-lg text-gray-800">
        {currentPageData.order}/{pageMap.length}
      </span>
            {nextPage && (
                <div className="flex flex-row items-center cursor-pointer pr-3">
                    <button
                        onClick={() => handleClick(nextPage.id)}
                        className="flex items-center px-3 py-2 rounded text-black text-xl"
                    >
                        Next Chapter
                    </button>
                    <PiArrowElbowRightDown className="mt-3 text-xl" />
                </div>
            )}
        </div>
    );
};

export default Chapter;
