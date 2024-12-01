export default function Newsletter({setBookingModal}) {
  return (
    <>
      <div
        className="container newsletter mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="row justify-content-center">
          <div className="col-lg-10 border rounded p-1">
            <div className="border rounded text-center p-1">
              <div className="bg-white rounded text-center p-5">
                <h4 className="mb-4">
                  Click Here to book
                </h4>
                <div
                  className="position-relative mx-auto"
                >
                  <button
                  onClick={(()=> setBookingModal(true))}
                    type="button"
                    className="btn btn-primary py-2 px-3  top-0 end-0 mt-2 me-2"
                  >
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
