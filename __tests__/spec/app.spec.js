import React from "react";
import { shallow, mount } from "enzyme";

import App from "../../src/app";

describe("App", () => {
  it("should render Hello React! header", () => {
    const app = shallow(<App />);
    expect(app.find("h1").text()).toBe("Hello React!");
  });
});
