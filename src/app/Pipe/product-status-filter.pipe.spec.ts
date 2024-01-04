import { ProductStatusFilterPipe } from './product-status-filter.pipe';

describe('ProductStatusFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductStatusFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
