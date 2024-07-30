import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
  const basicSkills = ["HTML", "css", "Javascript", "React"];
  test("Renders Correctly", () => {
    render(<Skills skills={basicSkills} />);
    const ListElement = screen.getByRole("list");
    expect(ListElement).toBeInTheDocument();
  });

  test("Renders list of Skills", () => {
    render(<Skills skills={basicSkills} />);
    const ListItemElements = screen.getAllByRole("listitem");
    expect(ListItemElements).toHaveLength(basicSkills.length);
  });

  test("Renders Login Button", () => {
    render(<Skills skills={basicSkills} />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start learning Button is not rendered", () => {
    render(<Skills skills={basicSkills} />);
    const startLearningBtn = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningBtn).not.toBeInTheDocument();
  });
});