import React, { Component } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import {
  SourceViewer,
  Alert,
  Button,
  FormFeedback,
} from 'app/components';
import faPencil from 'app/fontawesome-pro-light/faPencil';
import faTrash from 'app/fontawesome-pro-light/faTrash';

class StyleGuide extends Component {
  render() {
    return (
      <div className="p-content-lg flex-grow-1 bg-white">
        <h1>Style Guide</h1>

        <SourceViewer title="Headlines">
          <h1>Harmony Analytics</h1>
          <h2>Inspiring positive action</h2>
          <h3>Plan Overview</h3>
        </SourceViewer>

        <SourceViewer title="Buttons">
          <Button>Log in</Button>
        </SourceViewer>

        <SourceViewer>
          <Button size="lg">Log in</Button>
        </SourceViewer>

        <SourceViewer containerClassName="bg-gray">
          <Button color="white">Log in</Button>
        </SourceViewer>

        <SourceViewer containerClassName="bg-gray">
          <Button color="white" size="lg">
            Log in
          </Button>
        </SourceViewer>

        <SourceViewer title="Form Feedback Summary">
          <FormFeedback message={<span>Something has gone <a href="http://google.com">terribly</a> awry.</span>} visible={true} />
        </SourceViewer>

        <SourceViewer title="Alerts">
          <Alert>Information can be saved at any time.</Alert>
          <Alert color="danger">There was a problem saving <a className="alert-link" href="http://google.com">your</a> information.</Alert>
          <Alert color="warning">Your information will be <a className="alert-link" href="http://google.com">saved</a> within 24 hours.</Alert>
          <Alert color="success">Your information <a className="alert-link" href="http://google.com">has</a> been saved.</Alert>
        </SourceViewer>

        <SourceViewer title="Tables">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col"><span className="sr-only">Edit</span></th>
                <th scope="col"><span className="sr-only">Delete</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td className="w-2r text-center">
                  <a href="javascript:void(0)">
                    <Icon icon={faPencil} />
                  </a>
                </td>
                <td className="w-2r text-center">
                  <a href="javascript:void(0)" className="text-danger">
                    <Icon icon={faTrash} />
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td className="w-2r text-center">
                  <a href="javascript:void(0)">
                    <Icon icon={faPencil} />
                  </a>
                </td>
                <td className="w-2r text-center">
                  <a href="javascript:void(0)" className="text-danger">
                    <Icon icon={faTrash} />
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td className="w-2r text-center">
                  <a href="javascript:void(0)">
                    <Icon icon={faPencil} />
                  </a>
                </td>
                <td className="w-2r text-center">
                  <a href="javascript:void(0)" className="text-danger">
                    <Icon icon={faTrash} />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </SourceViewer>

      </div>
    );
  }
}

export default StyleGuide;
