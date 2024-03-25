import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumsService } from '../albums.service';
import { Album } from '../models';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit, OnDestroy{
  albums!: Album[];
  newAlbum: Album;
  loaded: boolean = false;

  constructor(private albumService: AlbumsService){
    this.newAlbum = {
      userId: 1,
      id: 0,
      title: ''
    }
  }

  ngOnInit() {
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) =>{
      this.albums = albums;
      this.loaded = true;
    } )
  }
  counter: number = 0;

  addAlbum() {
    let maxId = this.albums[this.albums.length - 1].id;
    this.counter = this.counter + 1;
    this.newAlbum.id = this.counter;
    console.log(this.newAlbum);
    this.albumService.createAlbum(this.newAlbum).subscribe((album) => {
      this.albums.push(album);
      this.newAlbum = {
        userId: 1,
        id: 0,
        title: ''
      }
    })
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter((album) => album.id != id);
    this.albumService.deleteAlbum(id).subscribe(() => console.log("deleted"));
  }

  ngOnDestroy() {
    
  }

}
