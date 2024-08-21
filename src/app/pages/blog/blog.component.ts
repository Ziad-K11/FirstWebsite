import { Component } from '@angular/core';
import { JoinTeamComponent } from "../../components/join-team/join-team.component";
import { CategoryCardComponent } from '../../components/category-card/category-card.component';
import { RouterOutlet } from '@angular/router';
import { Post } from '../../models/post.model';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [JoinTeamComponent, CategoryCardComponent,RouterOutlet],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  posts : Post[] =[{
    id : 1,
    name:'John Deo   ',
    date :'Aug 23, 2021',
    descrption:'8 Figma design systems that you can download for free today.'
    
  },
  {id:2,
    name:'John Deo   ',
    date :'Aug 23, 2021',
    descrption:'8 Figma design systems that you can download for free today.'
    
  },
  {id :3,
    name:'John Deo   ',
    date :'Aug 23, 2021',
    descrption:'8 Figma design systems that you can download for free today.'
    
  },
  {id:4,
    name:'John Deo   ',
    date :'Aug 23, 2021',
    descrption:'8 Figma design systems that you can download for free today.'
    
  }]
 categorys : Category[]=[{
  id : 1,
  iconPath:"/assets/Iconh.svg",
  title : "Business",
  description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
},
{
  id : 2,
  iconPath:"/assets/shuttle.svg",
  title : "Startup",
  description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
},{
  id : 3,
  iconPath:"/assets/stock.svg",
  title : "Economy",
  description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
},{
  id : 4,
  iconPath:"/assets/head.svg",
  title : "Technology",
  description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
}]
}
