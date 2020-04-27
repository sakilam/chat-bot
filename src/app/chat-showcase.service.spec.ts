import { TestBed } from '@angular/core/testing';

import { ChatShowcaseService } from './chat-showcase.service';

describe('ChatShowcaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatShowcaseService = TestBed.get(ChatShowcaseService);
    expect(service).toBeTruthy();
  });
});
