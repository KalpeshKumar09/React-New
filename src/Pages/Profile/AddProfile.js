import React from "react";
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiMobile1 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";

const initialState = {
    profile: "",
    name: "",
    // dateAndTime: "",
    email: "",
    mobileNo: "",
    /* location: "",
      service: "",
      address: "",
      concern: "",
      additionalDetails: "",
      paymentStatus: "",
      petName: "",
      species: "",
      breed: "",
      age: "",
      specialNeeds: "",
      yearsOfExperience: "",
      petImages: "", */
  };

const AddingProfile = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(initialState);
    const {profile,name, email, mobileNo} = data
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const { id } = useParams();
  
    useEffect(() => {
      id && getSingleUser();
    }, [id]);
  
    const getSingleUser = async () => {
      const docRef = doc(db, "bookings", id);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        setData({ ...snapshot.data() });
      }
    }; 
  
    useEffect(() => {
      const uploadFile = () => {
        const name = new Date().getTime + file.name;
        const storageRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
  
        uploadTask.on(
          "status_change",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
            switch (snapshot.state) {
              case "paused":
                console.log("uploaded is pause");
                break;
              case "running":
                console.log("running");
                break;
              default:
                break;
            }
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setData((prev) => ({ ...prev, img: downloadURL }));
            });
          }
        );
      };
      file && uploadFile();
    }, [file]);
  
    const handleChange = (e) => {
      setData({...data, [e.target.name]: e.target.value})
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmit(true);
      if (!id) {
        try {
          await addDoc(collection(db, "bookings"), {
            ...data,
            Timestamp: serverTimestamp(),
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          await updateDoc(doc(db, "bookings", id), {
            ...data,
            Timestamp: serverTimestamp(),
          });
        } catch (error) {
          console.log(error);
        }
      }
  
      navigate("/Booking")
    }; 

  return (
    <div className="flex flex-col px-10 py-5 bg-white max-md:px-5">
      <div className="mt-14 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start px-16 py-10 w-full text-2xl whitespace-nowrap bg-white rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] max-md:px-5 max-md:mt-4 max-md:max-w-full">
              <div className="ml-5 max-w-full aspect-square w-[80px] max-md:ml-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/799d1e1a6aa534b47d32b6524fa83be6ff1dc2861d9c4be3fe1141f2d0843d3e?"
                  className="self-center aspect-square w-[124px]"
                />
              </div>
              <div className="mt-5 ml-7 font-semibold text-zinc-700 max-md:ml-2.5 text-base">
                Fname Lname
              </div>
              <div className="flex gap-3 mt-7 text-zinc-700">
                <MdOutlineEmail className="my-auto w-5 aspect-[1.43]" />
                <div className="grow text-base">email</div>
              </div>
              <div className="flex gap-3.5 mt-5 text-zinc-700">
                <CiMobile1 className="w-4 aspect-[0.72] stroke-[2px] stroke-zinc-700" />
                <div className="flex-auto text-base">mobile</div>
              </div>
              <div className="flex gap-3 mt-6 text-zinc-700">
                <CiLocationOn className="w-5 aspect-[0.71]" />
                <div className="flex-auto my-auto text-base">location</div>
              </div>
              <div className="flex gap-4 mt-4 text-zinc-700">
                <IoIosLink className="my-auto aspect-square w-[11px]" />
                <div className="flex-auto text-base">link</div>
              </div>
              <div className="flex flex-col gap-4 mt-4 text-zinc-700">
                <div className="flex-auto text-base">Service Offerings</div>
                <div className="flex gap-2 justify-between mt-3 text-base ">
                  <button className="grow justify-center px-2.5 py-1 rounded-md border border-solid border-green-700 text-zinc-700">
                    Wellness Exams
                  </button>
                  <button className="grow justify-center px-1.5 py-1  rounded-md border border-green-500 border-solid text-zinc-700">
                    Vaccinations
                  </button>
                </div>
                <div className="flex gap-2 justify-between mt-3 text-base ">
                  <button className="grow justify-center px-2.5 py-1 rounded-md border border-solid border-red-700 text-zinc-700">
                    Surgery
                  </button>
                  <button className="grow justify-center px-1.5 py-1 0 rounded-md border border-red-500 border-solid text-zinc-700">
                    Emergency Care
                  </button>
                </div>
              </div>

              <div className="flex gap-5 justify-between mt-8 text-base font-semibold">
                <button className="grow justify-center px-2.5 py-2 rounded-md border border-solid border-zinc-700 text-zinc-700">
                  Block User
                </button>
                <button className="grow justify-center px-1.5 py-2 bg-red-500 rounded-md border border-red-500 border-solid text-slate-50">
                  Delete User
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full drop-shadow-lg">
            <div className="flex flex-col grow max-md:mt-4 max-md:max-w-full">
              <div className="flex flex-col justify-end px-7 py-4 bg-white rounded-md  text-zinc-700 max-md:px-5 max-md:max-w-full shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                <div className="text-lg font-semibold max-md:max-w-full">
                  About Me
                </div>
                <div className="mt-9 max-md:max-w-full text-base">
                  Hello, I’m Anshan Handgun Creative Graphic Designer & User
                  Experience Designer based in Website, I create digital
                  Products a more Beautiful and usable place. Morbid accusant
                  ipsum. Nam nec tellus at.
                </div>
              </div>
              <div className="flex flex-col items-start py-3 pr-20 pl-5 mt-3.5 bg-white rounded-md shadow-sm max-md:pr-5 max-md:max-w-full">
                <div className="max-w-full w-[761px]">
                  <div className="flex gap-2 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base font-medium text-zinc-700 max-md:mt-10">
                        <div className="text-lg font-semibold">
                          Personal Details
                        </div>
                        <div className="mt-7 text-base">First Name</div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 mt-1 text-sm border-b border-solid border-b-slate-200 max-md:pr-5">
                          Fname
                        </div>
                        <div className="mt-7 text-zinc-800 text-base">
                          Register Date
                        </div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 text-sm whitespace-nowrap border-b border-solid border-b-slate-200 max-md:pr-5">
                          21 December 2023{" "}
                        </div>
                        <div className="mt-7 text-base">Address</div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 mt-1 text-sm border-b border-solid border-b-slate-200 max-md:pr-5">
                          Address
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full pt-10">
                      <div className="flex flex-col self-stretch my-auto text-base font-medium text-zinc-700 max-md:mt-10">
                        <div>Last Name</div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 mt-1 text-sm whitespace-nowrap border-b border-solid border-b-slate-200 max-md:pr-5">
                          Lname
                        </div>
                        <div className="mt-7 text-base">Service Type</div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 mt-1 text-sm whitespace-nowrap border-b border-solid border-b-slate-200 max-md:pr-5">
                          Service Type
                        </div>
                        <div className="mt-7 text-zinc-800 text-base">
                          Years of experience
                        </div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 text-sm whitespace-nowrap border-b border-solid border-b-slate-200 max-md:pr-5">
                          10 years
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-7 mb-4 max-w-full w-[761px]">
                  <div className="flex gap-2 max-md:flex-col max-md:gap-0 max-md:">
                    <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base font-medium text-zinc-700 max-md:mt-10">
                        <div>Postal Code</div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 mt-1 text-sm whitespace-nowrap border-b border-solid border-b-slate-200 max-md:pr-5">
                          234245
                        </div>
                        <div className="mt-8 text-base">State</div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 mt-1 text-sm whitespace-nowrap border-b border-solid border-b-slate-200 max-md:pr-5">
                          State
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col whitespace-nowrap text-zinc-700 max-md:mt-10">
                        <div className="text-base">Role</div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 text-sm border-b border-solid border-b-slate-200 max-md:pr-5">
                          Role
                        </div>
                        <div className="text-base">City</div>
                        <div className="justify-center items-start py-2 pr-16 pl-2.5 text-sm border-b border-solid border-b-slate-200 max-md:pr-5">
                          City
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[100%] max-md:ml-0 max-md:w-full drop-shadow-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] max-md:px-5 max-md:mt-4 max-md:max-w-full">
            <div className="flex flex-col grow max-md:mt-4 max-md:max-w-full">
              <div className="text-lg font-semibold">
                Licensing and certifications
              </div>
              <div className="flex flex-row mt-8 gap-40">
                <div className="flex flex-col">
                  <div className="mt-7 text-base">
                     State Veterinary License
                  </div>
                  <div className="w-[410px] h-32 gap-0 opacity-[0px] border-2 border-[0px_0px] left-[511px] top-[109px]">
                    Aadhar Card
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="mt-7 text-base">Aadhar Card</div>
                  <div className="w-[410px] h-32 gap-0 opacity-[0px] border-2 border-[0px_0px] left-[511px] top-[109px]">
                    Aadhar Card
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="mt-7 text-base">State Veterinary License</div>
                  <div className="justify-center items-start py-2 pr-16 pl-2.5 mt-1 text-sm border-b border-solid border-b-slate-200 max-md:pr-5">
                    State Veterinary License
                  </div>
                  <div className="mt-7 text-base">Aadhar Card</div>
                  <div className="justify-center items-start py-2 pr-16 pl-2.5 mt-1 text-sm border-b border-solid border-b-slate-200 max-md:pr-5">
                    Aadhar Card
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default AddingProfile;
