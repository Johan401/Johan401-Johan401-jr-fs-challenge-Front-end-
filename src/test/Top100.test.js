import { render, screen, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import Pagination from "../components/pagination";
import Top100 from "../pages/TopShortCodes";

describe("Testing all components", () => {
    test("Render the title", () => {
      render(<Top100 />);
      const title = screen.getByText("Top 100 Short Codes");
      expect(title).toBeInTheDocument();    
    });

    test("Async Loading Request", async () => {
        render(<Top100 />);
        const loader = screen.getByTestId("loader");
        expect(loader).toBeInTheDocument();
        
        await new Promise(resolve => setTimeout(resolve, 1000));
    
        expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
    });

    test("Pagination works correctly", () => {
        render(<Pagination setCurrentPage={() => {}} topCodes={[1, 2, 3]} codesPerPage={1} setLoading={() => {}} />);
        const paginationButtons = screen.getAllByRole("button");
        expect(paginationButtons.length).toBe(3);
    });
  });