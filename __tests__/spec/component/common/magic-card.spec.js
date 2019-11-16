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

  it("should render div with given id", () => {
    magicCard = mount(<MagicCard id="i-love-react" />);

    expect(magicCard.children).toHaveLength(1);
    expect(magicCard.childAt(0).prop("id")).toBe("i-love-react");
    expect(magicCard.childAt(0).is("div")).toBeTruthy();
  });

  it("should render div with default id 'magic-card' when no given id", () => {
    magicCard = mount(<MagicCard />);

    expect(magicCard.children).toHaveLength(1);
    expect(magicCard.childAt(0).prop("id")).toBe("magic-card");
    expect(magicCard.childAt(0).is("div")).toBeTruthy();
  });

  it("should render with the style of the first status when render", () => {
    magicCard = mount(<MagicCard statuses={statuses} />);

    magicCard.update();
    const _card = magicCard.childAt(0);

    expect(_card.prop("className")).toBe(SILENT.className);
    expect(_card.prop("style")).toEqual(SILENT.style);
  });

  it("should change to the style of the next status after the delay time of previous status", () => {
    magicCard = mount(<MagicCard statuses={statuses} />);
    jest.advanceTimersByTime(1000);

    magicCard.update();
    const _card = magicCard.childAt(0);

    expect(_card.prop("className")).toBe(ACTIVE.className);
    expect(_card.prop("style")).toEqual(ACTIVE.style);
  });

  it("should change to the style of the third status after the delay time of second status", () => {
    magicCard = mount(<MagicCard statuses={statuses} />);
    jest.advanceTimersByTime(1000);
    jest.advanceTimersByTime(2000);

    magicCard.update();
    const _card = magicCard.childAt(0);

    expect(_card.prop("className")).toBe(INCORRECT.className);
    expect(_card.prop("style")).toEqual(INCORRECT.style);
  });

  it("should render given status prop regardless statuses", () => {
    magicCard = mount(<MagicCard statuses={statuses} status={ACTIVE} />);

    let _card = magicCard.childAt(0);

    expect(_card.prop("className")).toBe(ACTIVE.className);
    expect(_card.prop("style")).toEqual(ACTIVE.style);

    jest.runAllTimers();
    magicCard.update();
    _card = magicCard.childAt(0);

    expect(_card.prop("className")).toBe(ACTIVE.className);
    expect(_card.prop("style")).toEqual(ACTIVE.style);
  });

  it("should render given status prop when it changed", () => {
    magicCard = mount(<MagicCard statuses={statuses} status={ACTIVE} />);

    let _card = magicCard.childAt(0);

    expect(_card.prop("className")).toBe(ACTIVE.className);
    expect(_card.prop("style")).toEqual(ACTIVE.style);

    magicCard.setProps({ status: SILENT });
    magicCard.update();
    _card = magicCard.childAt(0);

    expect(_card.prop("className")).toBe(SILENT.className);
    expect(_card.prop("style")).toEqual(SILENT.style);
  });

  it("should call toggle prop when current status when click", () => {
    const mockToggle = jest.fn();
    magicCard = mount(<MagicCard statuses={statuses} toggle={mockToggle} />);

    magicCard.update();
    let _card = magicCard.childAt(0);

    _card.simulate("click");
    expect(mockToggle).toHaveBeenCalledWith(SILENT);

    jest.advanceTimersByTime(1000);

    magicCard.update();
    _card = magicCard.childAt(0);

    _card.simulate("click");
    expect(mockToggle).toHaveBeenCalledWith(ACTIVE);
  });

  it("should render style fo first status again when reset prop change to true", () => {
    magicCard = mount(<MagicCard statuses={statuses} />);

    magicCard.setState({ index: 1 });
    magicCard.update();
    let _card = magicCard.childAt(0);

    expect(_card.prop("className")).toBe(ACTIVE.className);
    expect(_card.prop("style")).toEqual(ACTIVE.style);

    magicCard.setProps({ reset: true });
    magicCard.update();
    _card = magicCard.childAt(0);

    expect(_card.prop("className")).toBe(SILENT.className);
    expect(_card.prop("style")).toEqual(SILENT.style);
  });

});
