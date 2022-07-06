import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soundcloud-tracks',
  templateUrl: './soundcloud-tracks.component.html',
  styleUrls: ['./soundcloud-tracks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoundcloudTracksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
