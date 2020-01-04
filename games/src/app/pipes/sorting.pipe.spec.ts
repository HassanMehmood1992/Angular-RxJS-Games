import { SortingPipe } from "./sorting.pipe";

describe("SortingPipe", () => {
  it("should create an instance", () => {
    const pipe = new SortingPipe();
    expect(pipe).toBeTruthy();
  });

  it("should sort based on rating", () => {
    const unsortedData = [
      {
        rating: 2
      },
      {
        rating: 1
      },
      {
        rating: 4
      }
    ];
    const sortedData = [
      {
        rating: 4
      },
      {
        rating: 2
      },
      {
        rating: 1
      }
    ];
    const pipe = new SortingPipe();
    expect(pipe.transform(unsortedData)).toEqual(sortedData);
  });
});
