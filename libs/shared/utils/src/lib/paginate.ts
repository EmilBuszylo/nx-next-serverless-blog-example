interface Paginate<T = Record<string, unknown>[]> {
  items: T[],
  page?: number;
  limit?: number;
}

export interface PaginateResult<T = Record<string, unknown>[]> {
  results: T[]
  total: number;
  totalPages: number;
  previousPage: number | null;
  nextPage: number | null;
}

export const paginate = <T>({items, page = 1, limit = 10}: Paginate<T>): PaginateResult<T> => {
  const offset = limit * (page - 1);
  const totalPages = Math.ceil(items.length / limit);
  const results = items.slice(offset, limit * page)

  return {
    previousPage: page - 1 ? page - 1 : null,
    nextPage: (totalPages > page) ? page + 1 : null,
    total: items.length,
    totalPages,
    results
  };
};
