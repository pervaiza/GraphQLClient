import {InputText} from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import {ListBox } from 'primereact/listbox';
import { useQuery, gql } from "@apollo/client";
import { useRef,useState } from 'react';

const getSpeakers = gql`	
 query getSpeakers {
    speakers {
      bio,
      name,
      id
    }
 }`;

function Speakers(){
    const toastRef = useRef();
    const { loading, error, data} = useQuery(getSpeakers);
    const onButtonClicked = () => {
        if(text)
        toastRef.current.show({severity: 'success', summary: 'Success Message', detail: text});
        else 
        toastRef.current.show({severity: 'error', summary: 'Error', detail: 'Value is required'});
    }
    const [text,setText] = useState('');
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>
    console.log(data);
    return (
        <div>
            <div>
                <Toast ref={toastRef} />
                <InputText onChange={e=> setText(e.target.value)} />
                <br/>
                <Button type="button" label='Submit' icon="pi pi-check" onClick={onButtonClicked} ></Button>
            </div>
            <div>
                <ListBox value={data.speakers} options={data.speakers} optionLabel="name" />
            </div>
        </div>
    );
}
export default Speakers;