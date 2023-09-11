import { render } from "@testing-library/react";

import App from "./App";

describe("Jest", () => {
  it("Shold display Elements", () => {
    render(<App />);
  });
});

/* <Button onClick={() => {}} backgroundColor="red" border="green" title="Teste Button" color="blue" /> */
