import {paginate} from "./paginate";

const mockArray: string[] = new Array(50).fill("test")

describe("paginate tests", () => {

  it("success - default", () => {
    const res = paginate<string>({items: mockArray})

    expect(res.results).toHaveLength(10)
    expect(res.totalPages).toEqual(5)
    expect(res.total).toEqual(50)
    expect(res.nextPage).toEqual(2)
    expect(res.previousPage).toBeFalsy()
  })

  it("success - custom params", () => {
    const res = paginate<string>({items: mockArray, limit: 25, page: 2})

    expect(res.results).toHaveLength(25)
    expect(res.totalPages).toEqual(2)
    expect(res.total).toEqual(50)
    expect(res.nextPage).toBeFalsy()
    expect(res.previousPage).toEqual(1)
  })
})
