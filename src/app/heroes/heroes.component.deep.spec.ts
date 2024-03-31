import {ComponentFixture, TestBed} from "@angular/core/testing"
import { Component, EventEmitter, Input, NO_ERRORS_SCHEMA, Output } from "@angular/core";
import { By } from "@angular/platform-browser";
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroComponent } from "../hero/hero.component";

describe('HeroesComponent (deep test)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;

    beforeEach(()=> {
        HEROES = [ 
            {id:1, name:'SpiderDude', strength:8},
            {id:2, name:'Wonderful Woman', strength:24},
            {id:3, name:'SuperDude', strength:55}
        ]
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        TestBed.configureTestingModule({
            declarations: [HeroesComponent,HeroComponent],
            providers: [
                {provide: HeroService, useValue: mockHeroService}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroesComponent);
        mockHeroService.getHeroes.and.returnValue(of(HEROES))
        fixture.detectChanges();
    })
    it('should render each hero as a HeroComponent', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES))
        //run ngOnInit
        fixture.detectChanges();
        const heroComponentDEs = fixture.debugElement.queryAll(By.directive(HeroComponent));
        for(let i = 0; i< heroComponentDEs.length; i++){
            expect(heroComponentDEs[i].componentInstance.hero).toEqual(HEROES[i]);    
        }
        
    })
})