import { Injectable } from '@angular/core';
import {Place} from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL:'https://megaconstrucciones.net/images/monumentos/foto/torre-eiffel.jpg',
      comments: ['Awesome place', 'Wonderful experience'] 
    },
    {
      id: '2',
      title: 'Museo del Prado',
      imageURL:'https://content3.cdnprado.net/imagenes/Documentos/imgsem/6e/6e83/6e83c242-b124-a506-80d4-b2bd11c01da5/01ab9c35-4715-d90a-ad87-34a0384470f4.jpg',
      comments: ['Really good place', 'Cool experience'] 
    },
    {
      id: '3',
      title: 'Bunker Carmelo',
      imageURL:'https://media-cdn.tripadvisor.com/media/photo-s/06/6a/5a/3d/bunker-del-carmel.jpg',
      comments: ['Genial', 'Increible'] 
    },
    {
      id: '4',
      title: 'Glasgow Green',
      imageURL:'https://i2-prod.glasgowlive.co.uk/incoming/article12536033.ece/ALTERNATES/s1200d/Glasgow-Green-Aerial-2.jpg',
      comments: ['Fantastico', 'Asomobroso'] 
    }
  ]



  constructor() {}

  getPlaces() {
    return [...this.places]
  }

  addPlace(title: string, imageURL: string) {
    this.places.push ({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + ""
    });
  }

  deletePlace(placeId: string){
    this.places = this.places.filter(place =>{
      return place.id !== placeId
    })
  }

  getPlace(placeId: string) {
    return {...this.places.find(place => {
      return place.id === placeId      
    })
   }
  }
  
}
