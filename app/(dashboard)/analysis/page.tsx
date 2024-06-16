import React from "react";

const Analysis = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Data Analysis
      </h1>
      <div className="relative w-full pb-[75%] overflow-hidden">
        <iframe
          title="MoneyMap Analysis App"
          src="https://moneymap.streamlit.app/?embed_options=show_colored_line,light_theme,show_toolbar,show_padding,show_footer,dark_theme"
          className="absolute top-0 left-0 w-full h-full border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default Analysis;
