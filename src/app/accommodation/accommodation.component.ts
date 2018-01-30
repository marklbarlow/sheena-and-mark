import { Component } from '@angular/core';

@Component({
  selector: 'sam-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent {

  public hotels = [
    { hotel: 'Travelodge, Bishop’s Stortford', link: 'https://www.travelodge.co.uk' },
    { hotel: 'The Cricketers, Clavering', link: 'http://www.thecricketers.co.uk' },
    { hotel: 'Saffron Hotel, Saffron Waldon', link: 'http://www.saffron-hotel.co.uk' },
    { hotel: 'The Millhouse, Stansted Mountfitchet', link: 'http://www.themillhousestansted.com' },
    { hotel: 'The Queens Head Inn, Littlebury', link: 'http://www.thequeensheadinn.net' },
    { hotel: 'The Cottage, Birchanger', link: 'http://www.thecottagebirchanger.co.uk' },
    { hotel: 'Phoenix Lodge, Bishop’s Stortford', link: 'http://www.phoenixlodge.co.uk' },
    { hotel: 'The Crown House, Great Chesterford', link: 'http://www.crownhousehotel.com' },
    { hotel: 'Chimneys Guest House, Stansted Mountfitchet', link: 'http://www.chimneysguesthouse.co.uk' },
  ];
}
