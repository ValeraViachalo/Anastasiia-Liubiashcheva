import React from "react";

export const TypoTester = () => {
  return (
    <section
      className="container"
      style={{ display: "flex", flexDirection: "column", gap: "2vw" }}
    >
      <h1>h1 Lorem ipsum dolor sit.</h1>
      <h2>h2 Lorem, ipsum dolor.</h2>
      <h3>h3 Miuioioo</h3>
      <h3 className="first-line">h3 first line</h3>
      <h3 className="first-line-book">h3 first line book</h3>
      <h3 className="figure">H3. Figure</h3>
      <h4>h4 Lorem ipsum dolor sit amet.</h4>
      <h5>h5 Lorem ipsum dolor sit.</h5>
      <h5 className="light">h5 light Lorem ipsum dolor sit.</h5>
      <h5 className="italic">h5 italic Lorem ipsum dolor sit.</h5>
      <h5 className="book">h5 book Lorem ipsum dolor sit.</h5>
      <h6>h6 Lorem, ipsum dolor.</h6>

      <p>BODY Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p className="light">B Light Lorem ipsum dolor sit amet consectetur.</p>
      <p className="semiBold">
        B semiBold Lorem ipsum dolor sit amet consectetur.
      </p>

      <p className="body-text-2">BDT2 Lorem, ipsum.</p>
      <p className="body-text-2 uppercase">BDT2 UPRCS Lorem, ipsum.</p>

      <p className="body-text-3">BDT3 Lorem, ipsum.</p>
      <p className="body-text-3 medium">BDT3 MDUM Lorem, ipsum.</p>

      <p className="body-text-4">BDT4 Lorem, ipsum.</p>
      <p className="body-text-4 medium">BDT4 MDUM Lorem, ipsum.</p>
      <p className="body-text-4 uppercase">BDT4 UPRCS Lorem, ipsum.</p>

      <p className="body-text-5 uppercase">BDT5 Lorem, ipsum.</p>

      <a href="/" className="header-link">
        header link
      </a>

      <a href="/" className="link-ul">
        Button Ul
      </a>
      <a href="/" className="link-medium">
        Button medium
      </a>
    </section>
  );
};
