import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { createOrGetUser } from '.';
import useAuthStore from './store/authStore';
import { AiOutlineLogout } from 'react-icons/ai';

//Top NavBar component.
function Header() {
    const { userProfile, addUser, removeUser } = useAuthStore();
    return (
        <nav className="navbar navbar-dark bg-dark flex-md-nowrap">
            <div className="navbar-brand px-2">PDF Invoice Generator</div>

            {userProfile ? (
                <div>
                        <div class="text-nowrap d-flex flex-row">
                            <h5 className="text-white px-2 ">{userProfile.name}</h5>
                        
                            <button type="button" className='btn btn-sm' onClick={() => {googleLogout();removeUser();window.location.reload()}}>
                                <AiOutlineLogout color="red" fontSize={18} /> logout
                            </button>
                        </div>
                </div>
                ) : (
                    <GoogleLogin   
                        onSuccess={(response) => createOrGetUser(response, addUser)}
                        onError={() => console.log('Error')}
                    />
                    
                )}

                
              

            
        </nav>
    );
  }
  
  export default Header;