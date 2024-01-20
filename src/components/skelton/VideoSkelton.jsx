import React from "react";

const VideoSkelton = () => {
  return (
    <div className="w-[">
      <div class="  shadow rounded-md p-4 max-w-sm w-full mx-auto ">
        <div className="animate-pulse flex flex-col  justify-normal  ">
          <div class="rounded-xl bg-slate-700 h-[200px] w-[350px]  my-5"></div>

          <div class=" flex space-x-4">
            <div class="rounded-full bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSkelton;
