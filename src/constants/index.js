import { Person, AssignmentInd, Email, Call, LocationOn, QuestionAnswerRounded, ArticleRounded, CorporateFareRounded, Home, Settings, Assignment, Dashboard } from '@mui/icons-material';

export const fields = [{
  name: "firstName",
  label: "First Name",
  svg: <Person />,
  type: "text"
},
{
  name: "lastName",
  label: "Last Name",
  svg: <Person />,
  type: "text"
},
{
  name: "displayName",
  label: "Display Name",
  svg: <AssignmentInd />,
  type: "text"
},
{
  name: "email",
  label: "Email",
  svg: <Email />,
  type: "text"
},
{
  name: "phoneNumber",
  label: "Phone Number",
  svg: <Call />,
  type: "number"
},
{
  name: "workNumber",
  label: "Work Number",
  svg: <Call />,
  type: "number"
},
{
  name: "location",
  label: "Location",
  svg: <LocationOn />,
  type: "text"
}];

export const itemList = [{
  "title": "Home",
  "icon": <Home />
},
{
  "title": "Projects",
  "icon": <Assignment />
},
{
  "title": "Dashboard",
  "icon": <Dashboard />
},
{
  "title": "Messages",
  "icon": <QuestionAnswerRounded />
}, {
  "title": "Documents",
  "icon": <ArticleRounded />
}, {
  "title": "Organisations",
  "icon": <CorporateFareRounded />
},
{
  "title": "Settings",
  "icon": <Settings />
}]

