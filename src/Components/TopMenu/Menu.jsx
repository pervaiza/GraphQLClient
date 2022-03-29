import {Menubar} from 'primereact/menubar';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

export const Menu = () =>{
    return(
        <Menubar 
            model={items}
            start={<InputText type="text" placeholder='Search speakers' />}
            end={<Button label='Search' icon='pi pi-search' />}
         />
    )
}

const items = [
   {
      label:'Attendees',
      icon:'pi pi-fw pi-user',
      items:[
         {
            label:'New',
            icon:'pi pi-fw pi-user-plus',

         },
         {
            label:'Delete',
            icon:'pi pi-fw pi-user-minus',

         },
         {
            label:'Search',
            icon:'pi pi-fw pi-users',
            items:[
               {
                  label:'Filter',
                  icon:'pi pi-fw pi-filter'
               },
               {
                  icon:'pi pi-fw pi-bars',
                  label:'List'
               }
            ]
         }
      ]
   },
    {
       label:'Speakers',
       icon:'pi pi-fw pi-user',
       items:[
          {
             label:'New',
             icon:'pi pi-fw pi-user-plus',

          },
          {
             label:'Delete',
             icon:'pi pi-fw pi-user-minus',

          },
          {
             label:'Search',
             icon:'pi pi-fw pi-users',
             items:[
                {
                   label:'Filter',
                   icon:'pi pi-fw pi-filter'
                },
                {
                   icon:'pi pi-fw pi-bars',
                   label:'List'
                }
             ]
          }
       ]
    },
    {
       label:'Sessions',
       icon:'pi pi-fw pi-calendar',
       items:[
          {
             label:'Edit',
             icon:'pi pi-fw pi-pencil',
             items:[
                {
                   label:'Save',
                   icon:'pi pi-fw pi-calendar-plus'
                },
                {
                   label:'Delete',
                   icon:'pi pi-fw pi-calendar-minus'
                },

             ]
          }
       ]
    }
 ];