import React from "react";
import { mount, shallow } from "enzyme";

import MagicCard from "../../../../src/component/common/magic-card";

jest.useFakeTimers();

describe("MagicCard", () => {
  let magicCard;
  const SILENT = {
    className: "silent",
    style: { backgroundColor: "ghostwhite" },
    delay: 1000
  };
  const ACTIVE = {
    className: "active",
    style: { backgroundColor: "darkturquoise" },
    delay: 2000
  };
  const INCORRECT = {
    className: "incorrect",
    style: { backgroundColor: "darkgrey" }
  };
  let statuses = [SILENT, ACTIVE, INCORRECT];

  it("should render with the style of the first status when render", () => {
    magicCard = mount(<MagicCard statuses={statuses} />);

    magicCard.update();
    const _card = magicCard.find("#magic-card");

    expect(_card.prop("className")).toBe(SILENT.className);
    expect(_card.prop("style")).toEqual(SILENT.style);
  });

  it("should change to the style of the next status after the delay time of previous status", () => {
    magicCard = mount(<MagicCard statuses={statuses} />);
    jest.advanceTimersByTime(1000);

    magicCard.update();
    const _card = magicCard.find("#magic-card");

    expect(_card.prop("className")).toBe(ACTIVE.className);
    expect(_card.prop("style")).toEqual(ACTIVE.style);
  });

  it("should change to the style of the third status after the delay time of second status", () => {
    magicCard = mount(<MagicCard statuses={statuses} />);
    jest.advanceTimersByTime(1000);
    jest.advanceTimersByTime(2000);

    magicCard.update();
    const _card = magicCard.find("#magic-card");

    expect(_card.prop("className")).toBe(INCORRECT.className);
    expect(_card.prop("style")).toEqual(INCORRECT.style);
  });

  it("should render with the style of the first status after delay time", () => {
    magicCard = mount(<MagicCard statuses={statuses} delay={1000} />);

    let _card = magicCard.find("#magic-card");

    expect(_card.prop("className")).not.toBe(SILENT.className);
    expect(_card.prop("style")).not.toEqual(SILENT.style);

    jest.advanceTimersByTime(1000);

    magicCard.update();
    _card = magicCard.find("#magic-card");

    expect(_card.prop("className")).toBe(SILENT.className);
    expect(_card.prop("style")).toEqual(SILENT.style);
  });

  it("should render given status prop regardless statuses", function() {
    magicCard = mount(<MagicCard statuses={statuses} status={ACTIVE} />);

    let _card = magicCard.find("#magic-card");

    expect(_card.prop("className")).toBe(ACTIVE.className);
    expect(_card.prop("style")).toEqual(ACTIVE.style);

    jest.runAllTimers();
    magicCard.update();
    _card = magicCard.find("#magic-card");

    expect(_card.prop("className")).toBe(ACTIVE.className);
    expect(_card.prop("style")).toEqual(ACTIVE.style);
  });

  it("should render given status prop when it changed", function() {
    magicCard = mount(<MagicCard statuses={statuses} status={ACTIVE} />);

    let _card = magicCard.find("#magic-card");

    expect(_card.prop("className")).toBe(ACTIVE.className);
    expect(_card.prop("style")).toEqual(ACTIVE.style);

    magicCard.setProps({ status: SILENT });
    magicCard.update();
    _card = magicCard.find("#magic-card");

    expect(_card.prop("className")).toBe(SILENT.className);
    expect(_card.prop("style")).toEqual(SILENT.style);
  });

  it("should call toggle prop when current status when click", function() {
    const mockToggle = jest.fn();
    magicCard = mount(<MagicCard statuses={statuses} toggle={mockToggle} />);

    magicCard.update();
    let _card = magicCard.find("#magic-card");

    _card.simulate("click");
    expect(mockToggle).toHaveBeenCalledWith(SILENT);

    jest.advanceTimersByTime(1000);

    magicCard.update();
    _card = magicCard.find("#magic-card");

    _card.simulate("click");
    expect(mockToggle).toHaveBeenCalledWith(ACTIVE);
  });
});
