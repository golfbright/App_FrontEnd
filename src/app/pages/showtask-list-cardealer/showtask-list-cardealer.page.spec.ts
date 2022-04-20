import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowtaskListCardealerPage } from './showtask-list-cardealer.page';

describe('ShowtaskListCardealerPage', () => {
  let component: ShowtaskListCardealerPage;
  let fixture: ComponentFixture<ShowtaskListCardealerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtaskListCardealerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowtaskListCardealerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
