import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PageDto } from '../../core/models/pageDto';
import { CategoryService } from '../../core/services/category.service';
import { Category } from 'src/app/core/models/category';

describe('CategoryService', () => {
  let service: CategoryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoryService]
    });

    service = TestBed.inject(CategoryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch paginated categories', () => {
    const mockResponse: PageDto<Category> = {
      content: [
        { name: 'Hogar', description: 'Categoría del hogar' },
        { name: 'Electro', description: 'Electrodomésticos' }
      ],
      pageNumber: 0,
      pageSize: 5,
      totalElements: 2,
      totalPages: 1,
      hasNext: false
    };

    service.getCategories(0, 5, true).subscribe((res) => {
      expect(res.content.length).toBe(2);
      expect(res.totalPages).toBe(1);
      expect(res.content[0].name).toBe('Hogar');
    });

    const req = httpMock.expectOne((req) =>
      req.url.includes('/category') &&
      req.params.get('page') === '0' &&
      req.params.get('size') === '5' &&
      req.params.get('orderAsc') === 'true'
    );

    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
  });
});