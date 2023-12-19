'use client'

import { useSelector } from 'react-redux';
import MenuForm from '../MenuForm/MenuForm'
import PageOne from '../FormIa/Page_1';
import PageTwo from '../FormIa/Page_2';
import PageThree from '../FormIa/Page_3';
import PageFour from '../FormIa/Page_4';
import PageFive from '../FormIa/Page_5';
import PageSix from '../FormIa/Page_6';
import PageSeven from '../FormIa/Page_7';
import PageEight from '../FormIa/Page_8';
import PageNineEnd from '../FormIa/Page_9_Final';


const FormGym = () => {
    const currentPage = useSelector(state => state.currentPage)

        return (
        <div class=" text-white w-full h-full flex flex-col items-center justify-center ">
            <div>
                <MenuForm />
            </div>
            <div >
              {currentPage === 1 && (
                <div>
                  <PageOne />
                </div>
              )}
              {currentPage === 2 && (
                <div>
                  <PageTwo />
                </div>
              )}
              {currentPage === 3 && (
                <div>
                  <PageThree />
                </div>
              )}
              {currentPage === 4 && (
                <div>
                  <PageFour />
                </div>
              )}
              {currentPage === 5 && (
                <div>
                  <PageFive />
                </div>
              )}
              {currentPage === 6 && (
                <div>
                  <PageSix />
                </div>
              )}
              {currentPage === 7 && (
                <div>
                  <PageSeven />
                </div>
              )}
              {currentPage === 8 && (
                <div>
                  <PageEight />
                </div>
              )}
              {currentPage >= 9 && (
                <div>
                  <PageNineEnd />
                </div>
              )}
          </div>
        </div>
        )
}

export default FormGym;