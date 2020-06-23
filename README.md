This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Points Covered
#### _Design (4)
- Fancy Animations (1)
- Modern Design (1)
- No UI Framework (1)
- Responsive Design (1)

#### Functionality (6.5)

- CI/CD (AWS pipeline on backend. Not on frontend though) (0.5)
- Pagination (2)
- Built my own API (4)

#### Testing (1)

- Works on Chrome, Firefox, Edge (1)

Total Points Covered => 11.5

## What I did
- Developed a backend API using Node & Express and implemented API's
- Scraped the web API directly and it will only get new data if a local variable is empty. Won't scrape on every API call.
- Link: [https://api.usmantahir.com/tretton/ninjas?page=0&size=12](https://api.usmantahir.com/tretton/ninjas?page=0&size=12)

### Deployment (CI/CD)
- Used Route53 to manage domain names, I had a domain usmantahir.com already, just mapped a new API there.
- Used Certificate Manager to generate SSL certificate
- (FE) Mapped it to AWS Cloudfront to S3 bucket and deployed front-end there.
- (B#) Mapped it to Elastic Beanstalk using Classic load balancer.
- (CD) Used AWS Code Pipeline to get code from master branch in github and deploy it to Elastic Beanstalk.

### Front End
- Deployed here: [https://tretton37.usmantahir.com/](https://tretton37.usmantahir.com/)
- used Create React App to generate application boilerplate
- used React Context instead of using Redux/Mobx because the app requirement was pretty simple and adding this much
complexity wasn't required in my opinion. I think keeping app simple is always important.
- I follow Brad Frost's Atomic Design principles in all my project, did so in this as well. To read more about it go
here: [https://bradfrost.com/blog/post/atomic-web-design/](https://bradfrost.com/blog/post/atomic-web-design/) 
- used only functional components (No class components used)
- didn't covered unit testing because I will have to brush up on these skills and I had already spent almost ~8 hours on it.
Adding unit tests would need 2-3 hours more.
- Added githooks and prettier which will prettify before commiting code.

## Time Division
- API: **~45 mins**
- CI/CD and domain mapping: **~30 mins**
- CSS/Design: **~1hr 30 mins** (re-used some of the logic from my previous project)
- Pagination: **1hr** (Pagination component functions took some time)
- Error handling and global functions: **1hr**
- API integrations, state management: **2hr**
- Cards design and layout issues: **1hr**

Total: ~7h 45m
