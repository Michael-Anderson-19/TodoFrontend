import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../../../components/modal/Modal";

describe("<Modal/>", () => {
  it("Modal matches snapshot", () => {
    const closeFn = jest.fn();

    const childrenProps = <p>Test content</p>;

    const { container } = render(
      <Modal title="Modal" onClose={closeFn}>
        {childrenProps}
      </Modal>
    );

    expect(container).toMatchSnapshot();
  });

  it("displays props correctly", () => {
    const closeFn = jest.fn();

    const childrenProps = <p>Test content</p>;

    render(
      <Modal title="Modal" onClose={closeFn}>
        {childrenProps}
      </Modal>
    );

    const closeButton = screen.getByRole("button");

    const props = screen.getByText("Test content");

    expect(closeButton).toBeInTheDocument();
    expect(props).toBeInTheDocument();

    userEvent.click(closeButton);
    expect(closeFn).toBeCalledTimes(1);
  });
});
