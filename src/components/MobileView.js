

const MobileView = ({isShow}) => {
  return (
    <>
         <div id="mobile-menu" class="sm:hidden">
          <div class="space-y-1 px-2 pt-2 pb-3">
            <a href="#" aria-current="page" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Home</a>
            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Riddle</a>
          </div>
        </div>
    </>
  )
}

export default MobileView