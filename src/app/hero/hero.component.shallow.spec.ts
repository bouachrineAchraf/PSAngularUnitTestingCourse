import {ComponentFixture, TestBed} from "@angular/core/testing"
import { HeroComponent } from "./hero.component"
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('HeroComponent (shallow test)', () => {
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(()=> {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroComponent);
    })
    it('should have the correct hero', () => {
        fixture.componentInstance.hero = {id:3, name:'SuperDude', strength:55}
        fixture.detectChanges();
        expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
    })
})