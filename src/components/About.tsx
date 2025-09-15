import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-[url('/images/darkBlue_cake.png')] bg-[length:150px_150px] bg-center bg-repeat flex justify-center items-center py-32 px-0 relative"
    >
      {/* Laço no canto superior esquerdo */}

      {/* Conteúdo central */}
      <div className="bg-[#a6c6de]/70 rounded-2xl py-6 px-10 max-w-xl text-left z-10">
        <h2 className="text-5xl font-bold mb-4">Sobre</h2>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
          eleifend ex. Nam purus mi, consequat in pharetra finibus, consequat in
          dolor. Aenean consequat dolor purus, quis placerat arcu tempor
          rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Nulla dignissim neque accumsan,
          imperdiet nunc non, molestie purus. Aenean commodo nibh sed turpis
          iaculis aliquet. Nulla dapibus mollis orci.
        </p>
      </div>

      {/* Bolo no canto inferior direito */}
    </section>
  );
};

export default About;
