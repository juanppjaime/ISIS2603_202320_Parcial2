import { Component, OnInit } from '@angular/core';
import { Dinosaurio } from '../dinosaurio';
import { DinosaurioService } from '../dinosaurio.service';

@Component({
  selector: 'app-dinosaurio-list',
  templateUrl: './dinosaurio-list.component.html',
  styleUrls: ['./dinosaurio-list.component.css']
})
export class DinosaurioListComponent implements OnInit {

  dinosaurios: Array<Dinosaurio> = [];
  selectedDinosaurio!: Dinosaurio;
  selected = false;

  constructor(private dinosaurioService: DinosaurioService) { }
  getDinosaurios(): void {
    this.dinosaurioService.getDinosaurios().subscribe((dinosaurios) => {
      this.dinosaurios = dinosaurios;
    });
  }
  onSelected(dinosaurio: Dinosaurio): void {
    this.selected = true;
    this.selectedDinosaurio = dinosaurio;
  }
  ngOnInit() {
    this.getDinosaurios();
  }

}
